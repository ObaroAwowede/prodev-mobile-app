import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchGroup: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 8,
  },
  searchFormText: {
    fontSize: 16,
    color: '#333333',
  },
  searchControl: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  filterContainer: {
    width: 72,
    height: 72,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listingContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  paginationContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  showMoreButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  showMoreButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export { styles }